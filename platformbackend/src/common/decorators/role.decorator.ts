import { SetMetadata } from "@nestjs/common";
import { accounttype } from "@prisma/client";

export const Applicant = () => SetMetadata("ROLE", accounttype.applicant);
export const Recruter = () => SetMetadata("ROLE", accounttype.applicant);


