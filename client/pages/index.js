import { useSession, signIn, signOut } from "next-auth/react"
import Layout from "@/components/layout"
import BetaAlert from "@/components/other/BetaAlert"
import { motion } from 'framer-motion'
import FeedbackDemo from "@/components/layout/FeedbackDemo"
import { ArrowRight } from "lucide-react"

export default function Component() {
  const { data: session } = useSession()
  return (
    <Layout>
      <title>Lunar</title>
      <center>
        <div className="lg:-mt-4 2xl:mt-0">
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
            sm:text-6xl 2xl:text-7xl 2xl:mt-14 md:text-7xl lg:text-5xl lg:mt-4 2xl:w-3/6 lg:w-4/6 sm:mt-8 text-5xl w-4/5 font-medium tracking-tight leading-none text-transparent bg-clip-text text-zinc-900 dark:text-white mt-8 drop-shadow-sm'>
           Collect and keep track of feedback from multiple projects, all in one place.
            </motion.h1>
            <br />
        </div>  
          <br />
          <div className="w-full content-center items-center justify-items-center">
              <div className="2xl:-mt-2 xl:-mt-4 2xl:w-2/6 xl:w-2/5 w-4/5 flex-row">
                <div></div>
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
                <FeedbackDemo session={session} title="Feedback" type="feedback" description={"Love the website, keep it up!"} upvotes="1"/>
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
                  transition={{duration: 0.5, delay: 0.30}}
                  >
                <FeedbackDemo session={session} title="Feature Request" type="feature_request" description={"Can you add more authentication options? thanks!"} upvotes="1"/>
                </motion.div>
              </div>
          </div>
            </center>
    </Layout>
  )
}