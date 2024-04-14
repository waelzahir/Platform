import { Catch, Injectable, OnModuleInit } from "@nestjs/common";

import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	constructor() {
		super({
			// log: ["error", "info", "query", "warn"],
		});
	}
	async onModuleInit() {
		try
		{
			await this.$connect();
		}catch{
			console.log("database Error: check if the DATABASE_URL is valid or the database is running")
			process.exit(-1)
		}

	}	
}