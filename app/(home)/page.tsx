import { Button } from "@/components/ui/button";
import { BlogFooter } from "@/components/ui/home/blog-footer";
import Navbar from "@/components/ui/home/header/navbar";
import HeroSection from "@/components/ui/home/hero-section";
import TopArticles from "@/components/ui/home/top-articles";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Articles
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover our most popular and trending content
            </p>
          </div>
          <TopArticles />
          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 text-lg hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900"
              >
                View All Articles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <BlogFooter />
    </main>
  );
}
