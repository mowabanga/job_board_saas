"use client"

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

interface GeneralSubmitButtonProps {
    text: string
    variant?: "default" | "outline" | "destructive" | "secondary" | "ghost" | "link"
    width?: string
    icon?: React.ReactNode
    disabled?: boolean
}

export function GeneralSubmitButton({ text, variant, width, icon }: GeneralSubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <Button type="submit" variant={variant} className={width} disabled={pending}>
            {pending ? (
                <>
                    <Loader2 className="size-4 animate-spin" />
                    <span>Submitting...</span>
                </>
            ) : (
                <>
                    {icon && <div className="mr-2">{icon}</div>}
                    <span>{text}</span>
                </>
            )}
        </Button>
    )
}   
