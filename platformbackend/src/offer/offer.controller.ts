import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { OfferService } from './offer.service';
import {  Applicant, Recruter } from 'src/common/decorators/role.decorator';
import { GetCurrentUser } from 'src/common/decorators/Auth.decorators';
import { log } from 'console';
import { Public } from 'src/common/decorators/public.decorator';
import { applyDto } from 'src/common/Dtos/apply.Dto';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}
  
  @Post("")
  @Recruter()  
  async createnewoffer( @GetCurrentUser('id') recruterid:number, @Body() offer :any)
  {
    console.log(offer, "created offer ")
    return await this.offerService.createoffer(recruterid , offer);
  }
  
  @Delete(":id")
  @Recruter()  
  async deleteoffer(@GetCurrentUser('id') recruterid:number, @Param("id") offerid:number)
  {
    console.log(offerid)
    if (Number.isNaN(offerid) || offerid < 0)
      throw new HttpException("Bad Request", HttpStatus.BAD_REQUEST);
    return await this.offerService.Deleteoffer(recruterid, offerid)
  }

  @Get()
  @Public()
  async getOffers(@Query("offset") offset:number, @Query("type") type:string, @Query("search") search:string )
  {
    console.log(type, search, offset)
    const index = !Number.isNaN(offset) && offset > 0  ? offset : 0;
    if (type === "title")
        return await this.offerService.getOffersbytitle(search, index);
    if (type === "Company")
      return await this.offerService.getOffersbyCompany(search, index);
    return await this.offerService.getoffers(index);
  }

  @Post("Apply")
  @Applicant()
  async ApplyToOffer(@GetCurrentUser('id') aplicant:number, @Body() offer: applyDto)
  {
    console.log(offer)
    return await this.offerService.ApplyToOffer(aplicant, offer);
  }

  @Get("applications")
  @Recruter()
  async GetMyOffers(@GetCurrentUser('id') recruter:number, @Query("offset") offset:number)
  {
    console.log(recruter, "recruterid is")
    return await this.offerService.getMyOffers(recruter, offset);
  }
}
