import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs"
import { LayoutDashboard, StarsIcon, ChevronDown, FileText, PenBox, GraduationCap, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent } from "@radix-ui/react-dropdown-menu"
import { checkUser } from "@/lib/checkUser"


async function Header() {
  await checkUser();
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-sm z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className='container mx-auto px-4 h-16 flex  items-center justify-between'>
        <Link href="/"> {/* For Logo */}
          <Image src="/logo.png" alt="Nexly" width={200} height={200} className="h-20 py-1 w-auto " />
        </Link>

        <div className="flex space-x-2 md:space-x-4 justify-center items-center">
          <div>
            <SignedIn>
              <Link href="/dashboard">
                <Button variant="outline">
                  <LayoutDashboard className='h-4 w-4' />
                  <span className='hidden md:block'> Industry Insights</span>
                </Button>
              </Link>
            </SignedIn>



          </div>
          <SignedIn>
            <DropdownMenu className="relative inline-block">
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="absolute left-1/2 transform -translate-x-1/2  w-40 bg-gray-500 bg-opacity-50 shadow-md rounded-md p-2 mt-1"  >
                <DropdownMenuItem asChild>
                  <Link href="/resume" className="flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/ai-cover-letter"
                    className="flex items-center gap-2"
                  >
                    <PenBox className="h-4 w-4" />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/interview" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
               
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

         <SignedOut>
                        <SignInButton >
                            <Button variant="outline">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier: "font-semibold"
                                },
                            }}
                            afterSignOutUrl='/'
                        />
                    </SignedIn>

        </div>

      </nav>




    </header>
  )
}

export default Header