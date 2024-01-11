import { motion, useScroll } from "framer-motion"

function AnimasiHeader() {
  const { scrollYProgress } = useScroll();
  
  return (
    <motion.div style={{ scaleX: scrollYProgress }} />  
  )
}
export default AnimasiHeader;