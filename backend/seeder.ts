import { PrismaClient, accounttype } from "@prisma/client";
import { exec } from "child_process";
import { createHash } from "crypto";
import * as util from "node:util";

const csv = require('csv-parser')
const fs = require('fs')


const results: Offer [] = [];
const prisma = new PrismaClient();
const newuser =
{
  Username: "rootuser",
  Password: createHash("sha256").update("YourRootUser@123").digest("hex"),
}

fs.createReadStream("jobsdatabase.csv")
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', async () => {
    await deploy("npx prisma migrate deploy")
    results.reverse()
      const user = await prisma.user.create(
        {
          data:{
            Username: newuser.Username,
            accounttype: "recruter",
            password: newuser.Password
          }
        }
      )
      for(let i = 0 ; i < results.length; i++)
        {
          results[i].recruter = 1
          const data = await prisma.offer.create(
            {
              data:results[i]
            }
          )
          console.log("Offer seeded", i)
          console.log(data)

        }
	  
  });



  type Offer = {
    recruter:number
    Employer :  string
    Job_title : string
    Company_location :  string
    Wages? :  string
    Experience? :  string
    description? :  string
    Job_Location? :  string
    Company_description? :  string
    role_Responsibilities? :  string
    role_Requirements? :  string
    Start_date? :  string
    Posting_date? :  string
}

const deploy = async  (command) => {

  const execPromise = util.promisify(exec);

        try {
        const {stdout, stderr} = await execPromise(command);
          console.log(stdout)
        } catch (error) {
            console.log(error);
            process.exit(1)
        }
  }
