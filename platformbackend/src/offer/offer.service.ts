import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { OfferDto } from 'src/common/Dtos/Offer.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OfferService {
    constructor(
        private readonly prisma :PrismaService
    ){}

    async createoffer(recruterid : number, offer :OfferDto)
    {
        
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
                        Company :{
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
                        Company :{
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
}
