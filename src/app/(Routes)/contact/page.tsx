"use client"
import { Button } from "@/components/ui/button"
import { Input } from '@/components/ui//input'
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from'react-icons/fa'
import { motion } from "framer-motion"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    desc: '(+91) 6362-050-449'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    desc: 'rahuljadvani24@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    desc: 'Bangalore, Karnataka'
  },
]


const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 1.6, duration: 0.6, ease: 'easeInOut' } }}
      className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[36px]">
          <div className="xl:h-[54%] order-2 lg:order-none">
            <form className="flex flex-col gap-6 p-6 bg-slate-900/90 rounded-xl">
              <h3 className=" text-3xl text-accent">
                Let's work togethor
              </h3>
              <p className="text-white/60 tracking-tight">Looking forward to connecting with like-minded individuals who share a passion for innovation and creativity.</p>
              <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="YourEmail@gmail.com" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder='Select a Service'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="wd">Web Development</SelectItem>
                    <SelectItem value="uxd">UI/UX Design</SelectItem>
                    <SelectItem value="csd">Custom Software Development</SelectItem>
                    <SelectItem value="pm">Project Management</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[204px]" placeholder="Type Your Message Here..." />
              <Button
                variant="ghost"
                size="sm"
                className="w-52 bg-slate-950 h-12 rounded-lg bg-none border-2 border-accent hover:bg-accent-hover hover:scale-105 hover:border-accent/10 hover:shadow-accent shadow-inner duration-300"
                aria-label="Download Resume"
              >
                Send Message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center justify-center lg:justify-end lg:order-none mb-8 lg:mb-0">
            <ul>
              {
                info.map((item, index) => {
                  return (
                    <li key={index}>
                      <div className="flex items-center gap-6 bg-slate-950 text-accent rounded-md p-6 hover:bg-primary hover:border hover:border-accent hover:text-white transition-colors duration-300">
                        <div className="text-[28px]">
                          {item.icon}
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="font-light text-md ">{item.title}</h3>
                          <p className="font-extrabold text-lg">{item.desc}</p>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact