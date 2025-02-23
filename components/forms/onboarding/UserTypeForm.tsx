import { Button } from "@/components/ui/button";
import { Building2, UserRoundIcon } from "lucide-react";

type UserSelectionType = 'company' | 'jobSeeker'

interface UserTypeSelectionProps {
    onSelect: (type: UserSelectionType) => void
}

export function UserTypeForm({onSelect}: UserTypeSelectionProps) {
    return (
        <div className="space-y-4">
            <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold">Welcome! Let's get started.</h2>
                <p className="text-muted-foreground">Choose how you would like to use our platform!</p>
            </div>

            <div className="grid gap-4">
                <Button
                    onClick={() => onSelect('company')}
                    className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-300 hover:border-primary hover:bg-primary/5" variant={"outline"}
                >
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Building2 className="size-6 text-primary" />
                    </div>

                    <div className="text-left">
                        <h3 className="text-lg font-semibold">Company / Organization</h3>
                        <p>Post jobs and find exceptional talent.</p>
                    </div>
                </Button>

                <Button 
                    onClick={() => onSelect('jobSeeker')}
                    className="w-full h-auto p-6 items-center gap-4 border-2 transition-all duration-300 hover:border-primary hover:bg-primary/5" variant={"outline"}
                >
                    <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <UserRoundIcon className="size-6 text-primary" />
                    </div>

                    <div className="text-left">
                        <h3 className="text-lg font-semibold">Job Seeker</h3>
                        <p>Find your dream job opportunity.</p>
                    </div>
                </Button>
            </div>
        </div>
    )
}
