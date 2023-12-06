import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import BetaAlert from "@/components/other/BetaAlert"
import { motion } from 'framer-motion'
import Image from "next/image"
import Feedback from "@/components/b/Feedback"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <title>Lunar</title>
      <center>
        <div className="lg:-mt-4 2xl:mt-0">
          <motion.div
          initial={{
            opacity: 0,
            y:-10
          }}
          animate={{
            opacity: 1,
            y:0
          }}
          transition={{duration: 0.8}}
          >
          <BetaAlert />
          </motion.div>
            <motion.h1 
            initial={{
              opacity: 0,
              x:20
            }}
            animate={{
              opacity: 1,
              x:0
            }}
            transition={{duration: 0.8}}
            className='
            sm:text-6xl 2xl:text-7xl 2xl:mt-14 md:text-7xl lg:text-6xl lg:mt-4 lg:w-3/6 sm:mt-8 text-5xl w-4/5 font-extrabold tracking-tight leading-none text-transparent bg-clip-text text-white mt-8 drop-shadow-sm'>
            connecting developers with users.
            </motion.h1>
            <br />
            {/* <p className='text-gray-100 lg:text-xl lg:w-2/6 md:w-3/6 w-4/5'>An easily embeddable, light-weight feedback widget package that is used to collect user feedback from anywhere.</p> */}
        </div>  
          <br />
          <div className="w-full content-center items-center justify-items-center">
              <div className="-mt-5 2xl:w-2/6 xl:w-2/5 w-4/5 flex-row">
              <motion.div
                  initial={{
                    opacity: 0,
                      y:-10
                  }}
                  animate={{
                   opacity: 1,
                   y:0
                  }}
                  transition={{duration: 0.5, delay: 0.15}}
                  >
                <Feedback session={session} title="Feedback" type="📝 Feedback" description={"Lunar is launching soon.."} upvotes="1"/>
                </motion.div>
                <br />
                <motion.div
                  initial={{
                    opacity: 0,
                      y:-10
                  }}
                  animate={{
                   opacity: 1,
                   y:0
                  }}
                  transition={{duration: 0.5, delay: 0.3}}
                  >
                <Feedback session={session} title="Feature Request" type="💡 Feature Request" description={"Lunar is launching soon.."} upvotes="1"/>
                  </motion.div>
              </div>
          </div>
            </center>
    </Layout>
  )
}