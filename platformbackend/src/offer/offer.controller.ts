import { Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { OfferService } from './offer.service';
import {  Recruter } from 'src/common/decorators/role.decorator';
import { GetCurrentUser } from 'src/common/decorators/Auth.decorators';
import { OfferDto } from 'src/common/Dtos/Offer.dto';
import { log } from 'console';

@Controller('offer')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}
  
  @Post("")
  @Recruter()  
  async createnewoffer( @GetCurrentUser('id') recruterid:number, offer :OfferDto)
  {
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
  async getOffers(@Query("offset") offset:number, @Query("type") type:string, @Query("search") search:string )
  {
    const index = !Number.isNaN(offset) && offset > 0  ? offset : 0;
    if (type === "title")
        return await this.offerService.getOffersbytitle(search, index);
    if (type === "Company")
      return await this.offerService.getOffersbyCompany(search, index);
    return await this.offerService.getoffers(index);
  }
}
