import { Module } from '@nestjs/common';
import { OfferService } from './offer.service';
import { OfferController } from './offer.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [OfferController],
  providers: [OfferService],
  imports: [PrismaModule]
})
export class OfferModule {}
