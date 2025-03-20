"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { NewCareerSchemaType } from "@/consts/types/zod"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
export function CreateNewCareerDialog() {


    const [newCareer, setNewCareer] = useState<NewCareerSchemaType>({
        title: "",
        yearOfExperience: "",
        responsibility: "",
        industry: "",
        description: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string>("");
    const router = useRouter();

    async function handleCreateNewCareer() {
        setIsLoading(true);

        const response = await axios.post("/api/career/addNew", newCareer);

        if (response.status !== 200) {
            setSubmitMessage("Something went wrong");
        } else {
            setSubmitMessage("Form submitted successfully");
        }

        setTimeout(() => {
            setSubmitMessage("");
        }, 3000);

        console.log(newCareer);

        setNewCareer({
            title: "",
            yearOfExperience: "",
            responsibility: "",
            industry: "",
            description: "",
        });

        setIsLoading(false);
        router.refresh();
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Add new</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[512px]">
                <DialogHeader>
                    <DialogTitle>Add new career</DialogTitle>
                    <DialogDescription>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur delectus earum iure doloribus molestias quas
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-2 md:gap-4">
                        <Label htmlFor="title" className="md:text-right col-span-4 md:col-span-1">
                            Title
                        </Label>
                        <Input id="title" name="title" onChange={(e) => setNewCareer({ ...newCareer, title: e.target.value })} value={newCareer.title} placeholder="Title" className="col-span-4 md:col-span-3" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-2 md:gap-4">
                        <Label htmlFor="yearOfExperience" className="md:text-right col-span-4 md:col-span-1">
                            Year of Experience
                        </Label>
                        <Input type="number" id="yearOfExperience" name="yearOfExperience" onChange={(e) => setNewCareer({ ...newCareer, yearOfExperience: e.target.value })} value={newCareer.yearOfExperience} placeholder="2" className="col-span-4 md:col-span-3 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-2 md:gap-4">
                        <Label htmlFor="responsibility" className="md:text-right col-span-4 md:col-span-1">
                            Responsibility
                        </Label>
                        <Input id="responsibility" name="responsibility" onChange={(e) => setNewCareer({ ...newCareer, responsibility: e.target.value })} placeholder="Enter Responsibility" value={newCareer.responsibility} className="col-span-4 md:col-span-3" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-2 md:gap-4">
                        <Label htmlFor="industry" className="md:text-right col-span-4 md:col-span-1">
                            Industry
                        </Label>
                        <Input id="industry" name="industry" onChange={(e) => setNewCareer({ ...newCareer, industry: e.target.value })} placeholder="Enter Industry" value={newCareer.industry} className="col-span-4 md:col-span-3" />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-2 md:gap-4">
                        <Label htmlFor="description" className="md:text-right col-span-4 md:col-span-1">
                            Job Description
                        </Label>
                        <Textarea id="description" name="description" onChange={(e) => setNewCareer({ ...newCareer, description: e.target.value })} placeholder="Enter Job Description" value={newCareer.description} className="col-span-4 md:col-span-3 min-h-20" />
                    </div>
                </div>

                {
                    submitMessage && <p className={submitMessage === "Form submitted successfully" ? "text-green-700" : "text-red-700"} >{submitMessage}</p>
                }
                <DialogFooter>
                    <Button disabled={isLoading} onClick={handleCreateNewCareer} type="submit">
                        {
                            isLoading ? <Loader2 className="animate-spin" /> : <p>Create</p>
                        }
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
