import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import Image from "next/image";
import AuthForm from "./components/auth/AuthForm";

export default async function Home() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFCF5]">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Logo and text removed */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <div className="hero-gradient flex-1 flex justify-center items-center pb-[100px] gap-10 relative box-border overflow-visible w-full">
          <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-8 px-4 sm:px-[30px] md:px-[60px]">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Finding Home</h1>
              <p className="text-xl text-gray-600">
                A collection of memories and stories of Robin Noor
              </p>
              <Link
                href={user ? "/protected" : "/sign-in"}
                className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-colors"
              >
                Get access — sign in or sign up
              </Link>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-[288px] h-[288px]">
                <Image
                  src="https://framerusercontent.com/images/Hhz3WwgDTmIVyW8eJ1Y6e9oF1P4.png"
                  alt="Robin Noor"
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Spacing after hero */}
        <div className="h-6 py-4"></div>

        {/* Spacing below hero */}
        <div className="h-5"></div>

        {/* About Section */}
        <section className="max-w-3xl mx-auto pb-16 min-[1040px]:max-w-[920px]">
          <h2 className="text-2xl font-bold mb-6">About</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              As Robin Noor's daughter, I wanted to preserve my family history
              by starting to capture my father's life story. It's a way to honor
              and celebrate his life achievements, contributions, and legacy.
              Beyond his personal accounts lies glimpses of historical events,
              cultural changes, and social movements that he may have
              witnessed or participated in.
            </p>
            <p>
              As I continue this journey of ensuring his memories and
              experiences are preserved, I hope it can serve as a record for
              future generations to understand their roots and where we come
              from.
            </p>
            <p className="text-gray-500">- Tasmia Noor</p>
          </div>
        </section>

        {/* How it works Section */}
        <section className="max-w-3xl mx-auto pb-16 min-[1040px]:max-w-[920px]">
          <h2 className="text-2xl font-bold mb-6">How it works</h2>
          <p className="text-gray-600">
            Since these collection of stories are meant for close family and
            friends only, we'll provide access on a case by case basis. Fill
            out the "Join" form below to request access! We'll send you an
            email about access soon after.
          </p>
        </section>

        {/* Spacing above footer */}
        <div className="h-5"></div>

        {/* Sign Up Section */}
        <section className="max-w-3xl mx-auto pb-16 min-[1040px]:max-w-[920px]">
          <div className="min-h-[calc(100vh-8rem)] flex items-start justify-center">
            <AuthForm variant="signup" />
          </div>
        </section>

        {/* Footer */}
      </main>
    </div>
  );
}
