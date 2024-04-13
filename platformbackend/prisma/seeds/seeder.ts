import { PrismaClient } from "@prisma/client";
const csv = require('csv-parser')
const fs = require('fs')


const results: Offer [] = [];
const prisma = new PrismaClient();





fs.createReadStream("jobsdatabase.csv")
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', async () => {
      results.reverse()
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