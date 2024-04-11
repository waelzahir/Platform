import { Injectable } from '@nestjs/common';
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
        return await this.prisma.offer.findMany(
            {
                where:{
                    OR : [
                       {
                            title :{
                                startsWith:search,
                            }
                       },
                       {
                        title :{
                            endsWith:search,
                        }
                       }
                    ]
                },
                skip: 30 * offset,
                take: 30,
            }
        )
    }
    async getOffersbyCompany (search: string, offset: number)
    {
        const job = typeof search === 'undefined' ? "" : search;
        return await this.prisma.offer.findMany(
            {
                where:{
                    OR : [
                       {
                            Company :{
                                startsWith:search,
                            }
                       },
                       {
                        Company :{
                            endsWith:search,
                        }
                       }
                    ]
                },
                skip: 30 * offset,
                take: 30,
            }
        )
    }

    async getoffers (offset:number)
    {
        return await this.prisma.offer.findMany(
            {
                skip: 30 * offset,
                take: 30,
            }
        )
    }
}
