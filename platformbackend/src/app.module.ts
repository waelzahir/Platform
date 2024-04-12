import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './common/guards/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { OfferModule } from './offer/offer.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [PrismaModule, AuthModule, JwtModule.register({}), OfferModule, UsersModule],
  providers: [
    {
			provide: APP_GUARD,
			useClass: AuthGuard,
		},
  ],
})
export class AppModule {}
