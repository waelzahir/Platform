import { PrismaClient } from "@prisma/client";
const csv = require('csv-parser')
const fs = require('fs')


const results: Offer [] = [];
const prisma = new PrismaClient();





fs.createReadStream("jobsdatabase.csv")
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', async () => {
      await prisma.user.update(
        {
          where:{
            Username: "rootuser"
          },
          data:{
            offers:{
              createMany:{
                data:results,
              }
            }
          }
        }
      )
	  
  });



  type Offer = {
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