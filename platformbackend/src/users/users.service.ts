import { Injectable } from '@nestjs/common';
import { off } from 'process';
import { OfferDto } from 'src/common/Dtos/Offer.dto';
import { applyDto } from 'src/common/Dtos/apply.Dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
    constructor(
        private readonly prisma: PrismaService
    ){}

    async getMyOffers(recruter:number, offset:number)
    {
        return await this.prisma.offer.findMany(
            {
                where:{
                    recruter: recruter
                },
                select:{
                    id:true,
                    title:true,
                    Company:true,
                    applications: true
                },
                take: 30,
                skip:30 * offset
            }
        )
    }

    async ApplyToOffer(userid:number, offer:applyDto)
    {
        return await this.prisma.offer.update(
            {
                where:{
                    id:offer.id
                },
                data:{
                    applications: {
                        create:{
                            name:offer.name,
                            email:offer.email,
                            phonenumber:offer.phonenumber
                        }
                    }
                }
            }
        )
    }
}
