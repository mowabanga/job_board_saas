"use server"

import { redirect } from "next/navigation";
import { prisma } from "./utils/db";
import { requireUser } from "./utils/requireUser"
import { companySchema } from "./utils/zodSchema"
import { z } from "zod"

export async function createCompany(data: z.infer<typeof companySchema>) {
    const session = await requireUser();

    const validateData = companySchema.parse(data);

    await prisma.user.update({
        where: {
            id: session.id
        },
        data: {
            onBoardingCompleted: true,
            userType: "COMPANY",
            Company: {
                create: {
                    name: validateData.name,
                    location: validateData.location,
                    about: validateData.about,
                    logo: validateData.logo,
                    website: validateData.website,
                    xAccount: validateData.xAccount,
                }
            }
        }
    })

    return redirect("/")
}