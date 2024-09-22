import Link from 'next/link'

export default function Repertoire() {
    return (
        <div className="bg-slate-900 text-slate-100" id="repertoire">
            <div className="flex w-full flex-col flex-wrap gap-12 md:flex-row">
                <div className="flex-1 p-8">
                    <h1 className="pb-4 font-subtitle text-2xl">
                        Our Repertoire
                    </h1>
                    <p className="pb-3">
                        We have a diverse and ever-expanding repertoire, and
                        we’re more than happy to take requests from the list! We
                        can also put together tailored sets on request, whether
                        that’s Christmas, Oktoberfest or football-themed. View
                        our repertoire list here:
                    </p>
                    <Link
                        className="btn btn-ghost btn-lg mt-6 bg-[#EB4A98] font-subtitle text-white"
                        href={
                            'https://docs.google.com/document/d/1uHsGNrw5Hr5T73mFRQ0zoVIxePTId9KbzJehZ7zsdmU/edit?usp=sharing'
                        }
                    >
                        Download Repertoire List
                    </Link>
                </div>
                <div className="flex flex-1 flex-col gap-8 bg-gray-800 p-8">
                    <div>
                        <h4 className="pb-2 font-subtitle text-xl font-semibold">
                            Selected Repertoire
                        </h4>
                        <h5 className="font-subtitle text-lg font-thin italic">
                            Scroll down for more
                        </h5>
                    </div>
                    <ul className="h-60 overflow-y-scroll text-lg">
                        <li>360 - Charli XCX</li>
                        <li>Angels - Robbie Williams</li>
                        <li>Anti-Hero - Taylor Swift</li>
                        <li>Are You Gonna Be My Girl - Jet</li>
                        <li>...Baby One More Time - Britney Spears</li>
                        <li>Bad Romance - Lady Gaga</li>
                        <li>Basket Case - Greenday</li>
                        <li>Believe - Cher</li>
                        <li>Better Off Alone - Alice Deejay</li>
                        <li>Bills, Bills, Bills - Destiny’s Child</li>
                        <li>Blank Space - Taylor Swift</li>
                        <li>Bring Me To Life - Evanescence</li>
                        <li>Bulletproof - La Roux</li>
                        <li>Bye Bye Bye - *NSYNC</li>
                        <li>Celebration - Kool & The Gang</li>
                        <li>Cheerleader - OMI</li>
                        <li>Country Roads - John Denver</li>
                        <li>Crazy In Love - Beyonce</li>
                        <li>Dancing In The Moonlight - Toploader</li>
                        <li>Don’t Look Back In Anger - Oasis</li>
                        <li>Don’t You Want Me Baby - The Human League</li>
                        <li>Don’t You Worry Child - Swedish House Mafia</li>
                        <li>Espresso - Sabrina Carpenter</li>
                        <li>Everybody (Backstreet’s Back) - Backstreet Boys</li>
                        <li>Everytime We Touch - Cascada</li>
                        <li>Freed From Desire - Gala</li>
                        <li>Genie In a Bottle - Christina Aguilera</li>
                        <li>Get Busy - Sean Paul</li>
                        <li>Girls Just Wanna Have Fun - Cyndi Lauper</li>
                        <li>Good Luck, Babe! - Chappell Roan</li>
                        <li>Gonna Fly Now (Rocky theme) - Bill Conti</li>
                        <li>Grace Kelly - MIKA</li>
                        <li>Groove Is in the Heart - Deee-Lite</li>
                        <li>Heaven - DJ Sammy</li>
                        <li>Hey Baby - DJ Otzi</li>
                        <li>Hey Jude - The Beatles</li>
                        <li>Hips Don’t Lie - Shakira</li>
                        <li>I Feel Good - James Brown</li>
                        <li>I Like It Like That - Pete Rodriguez</li>
                        <li>I Wanna Dance With Somebody - Whitney Houston</li>
                        <li>I Want It That Way - Backstreet Boys</li>
                        <li>Isn’t She Lovely - Stevie Wonder</li>
                        <li>Levitating - Dua Lipa</li>
                        <li>Love On Top - Beyonce</li>
                        <li>Marry You - Bruno Mars</li>
                        <li>Miserlou/Pump It - Black Eyed Peas</li>
                        <li>Mr Brightside - The Killers</li>
                        <li>Murder On The Dancefloor - Sophie Ellis Bexter</li>
                        <li>RuPaul Medley - RuPaul</li>
                        <li>Seven Nation Army - The White Stripes</li>
                        <li>Sexual Healing - Marvin Gaye</li>
                        <li>
                            Shake Your Body Down To The Ground - The Jacksons
                        </li>
                        <li>Shut Up And Dance - Walk The Moon</li>
                        <li>Sweet Caroline - Neil Diamond</li>
                        <li>These Words - Natasha Beddingfield</li>
                        <li>This Girl - Kungs</li>
                        <li>Three Lions - The Lightning Seeds</li>
                        <li>Toxic - Britney Spears</li>
                        <li>Tubthumping - Chumbawamba</li>
                        <li>Unwritten - Natasha Beddingfield</li>
                        <li>Waterfalls - TLC</li>
                        <li>We Found Love - Rihanna/Calvin Harris</li>
                        <li>Whole Again - Atomic Kitten</li>
                        <li>You’ve Got The Love - Florence + The Machine</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
