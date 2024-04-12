import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Offer, Prisma } from '@prisma/client';
import { OfferDto } from 'src/common/Dtos/Offer.dto';
import { applyDto } from 'src/common/Dtos/apply.Dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OfferService {
    constructor(
        private readonly prisma :PrismaService
    ){}

    async createoffer(recruterid : number, offer :Offer)
    {
         return this.prisma.user.update(
            {
                where:{
                    id:recruterid
                },
                data:{
                    offers:{ 
                        create:offer
                    }
                }
            }
        )
    }

    async Deleteoffer(recruterid:number, offerid:number)
    {
        const deletion = await  this.prisma.offer.delete(
            {
                where:{
                    id: offerid,
                    recruter: recruterid,
                }
            }
        )
    }

    async getOffersbytitle (search: string, offset: number)
    {
        const job = typeof search === 'undefined' ? "" : search;
        try
        {
            return await this.prisma.offer.findMany(
                {
                    where:{
                        Job_title :{
                            contains:job,
                        }
                    },
                    skip: 30 * offset,
                    take: 30,
                }
            )
        } 
        catch {
            throw new HttpException("Bad Request: Area GTT", HttpStatus.BAD_REQUEST)
        }
    }
    async getOffersbyCompany (search: string, offset: number)
    {
        const com = typeof search === 'undefined' ? "" : search;
        try
        {
            return await this.prisma.offer.findMany(
                {
                    where:{
                        Employer :{
                            contains:com,
                        }
                    },
                    skip: 30 * offset,
                    take: 30,
                }
            )
        
        } 
        catch {
            throw new HttpException("Bad Request: Area GTC", HttpStatus.BAD_REQUEST)
        }
    }

    async getoffers (offset:number)
    {
        console.log(offset)
        try
        {
            return await this.prisma.offer.findMany(
                {
                    skip: 30 * offset,
                    take: 30,
                }
            )
        } 
        catch {
            throw new HttpException("Bad Request: Area GTO", HttpStatus.BAD_REQUEST)
        }
    }

    async getMyOffers(recruter:number, offset:number)
    {
        return await this.prisma.offer.findMany(
            {
                where:{
                    recruter: recruter
                },
                select:{
                    Employer:true,
                    Job_title:true,
                    applications: true
                },
                take: 30,
                skip:30 * offset
            }
        )
    }

    async ApplyToOffer(userid:number, offer:applyDto)
    {
        try
        {

            return await this.prisma.offer.update(
                {
                where:{
                    id:offer.id
                },
                data:{

                    applications: {
                        create:{
                            applicant:userid,
                            name:offer.name,
                            email:offer.email,
                            phonenumber:offer.phonenumber
                        }
                    }
                }
            }
        )
    }
    catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError)
              throw new HttpException("Faulty credentials or already applied", HttpStatus.FORBIDDEN)
        throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST)
      }
    }
}
