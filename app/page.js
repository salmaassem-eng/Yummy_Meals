import Link from 'next/link';
import classes from './page.module.css';
import ImageSlideshow from './components/SlideShow';

export default function Home() {
  return (
   <>
   <header className={classes.header}>
    <div className={classes.slideshow}>
      <ImageSlideshow />
    </div>

    <div>
      <div className={classes.hero}>
        <h1>Yummy Meals</h1>
        <p>Welcome to our restaurant! We serve the best meals in town.</p>
      </div>

    <div className={classes.cta}>
      <Link href="/community" >Join our Community</Link>
      <Link href="/meals" >Explore Meals</Link>
    </div>
    </div>

   </header>
 <main>
      <section className="mx-auto w-[90%] max-w-2xl py-16 text-center first:pt-10">
        <h2 className="font-serif text-3xl text-amber-400 sm:text-4xl">
          How it works
        </h2>
        <div className="mx-auto mt-3 h-px w-16 bg-amber-400/60" />
        <p className="mt-6 text-lg leading-relaxed text-stone-300 sm:text-xl">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-stone-300 sm:text-xl">
          NextLevel Food is a place to discover new dishes, and to connect
          with other food lovers.
        </p>
      </section>
 
      <div className="mx-auto h-px w-[90%] max-w-2xl bg-stone-800" />
 
      <section className="mx-auto w-[90%] max-w-2xl py-16 text-center last:pb-10">
        <h2 className="font-serif text-3xl text-amber-400 sm:text-4xl">
          Why NextLevel Food?
        </h2>
        <div className="mx-auto mt-3 h-px w-16 bg-amber-400/60" />
        <p className="mt-6 text-lg leading-relaxed text-stone-300 sm:text-xl">
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. It&apos;s a place to discover new dishes, and to
          connect with other food lovers.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-stone-300 sm:text-xl">
          NextLevel Food is a place to discover new dishes, and to connect
          with other food lovers.
        </p>
      </section>
    </main>
    
   </>
  );
}
