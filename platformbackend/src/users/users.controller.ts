import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { Applicant, Recruter } from 'src/common/decorators/role.decorator';
import { GetCurrentUser } from 'src/common/decorators/Auth.decorators';
import { OfferDto } from 'src/common/Dtos/Offer.dto';
import { applyDto } from 'src/common/Dtos/apply.Dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get("applications")
  @Recruter()
  async GetMyOffers(@GetCurrentUser('id') recruter:number, @Query("offset") offset:number)
  {
    console.log(recruter, "recruterid is")
    return await this.usersService.getMyOffers(recruter, offset);
  }

  @Post("Apply")
  @Applicant()
  async ApplyToOffer(@GetCurrentUser('id') aplicant:number, @Body() offer: applyDto)
  {
    return await this.usersService.ApplyToOffer(aplicant, offer);
  }

}
