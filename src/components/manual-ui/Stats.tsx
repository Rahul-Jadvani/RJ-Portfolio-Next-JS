"use client"
import CountUp from 'react-countup'

const statValues = [
  {
    id:0,
    num: 1,
    text: 'Years of Experience'
  },
  {
    id: 1,
    num: 18,
    text: 'Projects Worked On'
  },
  {
    id: 2,
    num: 25,
    text: 'Techs/Skills mastered'
  },
  {
    id: 3,
    num: 27,
    text: 'Code Commits on GitHub'
  },
]

const Stats = () => {
  return (
    <section>
      <div className='container mx-auto'>
        <div className='flex flex-wrap gap-6 max-w-[80vh] mx-auto lg:max-w-none'>
          {
            statValues.map((stat) => {
              return (
                <div key={stat.id} className='flex-1 flex gap-4 items-center justify-center lg:justify-start  lg:mt-20'>
                  <CountUp end={stat.num} duration={5} delay={2} className='text-4xl lg:text-6xl font-extrabold' />
                  <p className={`${stat.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'}leading-snug text-white/80 tracking-normal`}>{stat.text}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Stats