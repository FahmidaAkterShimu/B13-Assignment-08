"use client";

import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


const LogoutButton = () => {

    const router = useRouter();


    const handleLogout = async () => {

        await authClient.signOut();

        toast.success("Logged out successfully");

        router.push("/login");
        router.refresh();
    }


    return (
        <button
            onClick={handleLogout}
            className="w-full border border-border text-foreground font-semibold py-2.5 rounded-xl hover:bg-[#FFB900]/10 transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
        >
            <LogOut className="w-4 h-4" />
            Logout
        </button>
    )
}

export default LogoutButton;