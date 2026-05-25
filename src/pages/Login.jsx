import { motion } from "framer-motion";
import LoginForm from "@/components/auth/LoginForm";
import toyotaLogo from "@/assets/toyota_icon_name.png";
function Login() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Gradient */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#140406]
          via-[#1C1C1E]
          to-black
        "
      />
      {/* Animated Red Glow Top */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-120px]
          left-[-120px]
          h-[340px]
          w-[340px]
          rounded-full
          bg-[#EB0A1E]/20
          blur-3xl
        "
      />
      {/* Animated Red Glow Bottom */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-140px]
          right-[-100px]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#EB0A1E]/10
          blur-3xl
        "
      />
      {/* Grid Overlay */}
      <div
        className="
          absolute inset-0
          opacity-[0.05]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:60px_60px]
        "
      />
      {/* Content */}
      <div
        className="
          relative z-10
          flex min-h-screen flex-col
          items-center
          justify-center
          px-6
        "
      >
        {/* Branding */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <img
            src={toyotaLogo}
            alt="Toyota"
            className="h-26 w-auto object-contain"
          />
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white">
            Mithra Portal
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65">
            Enterprise employee experience platform powered by SAP BTP
          </p>
        </motion.div>
        {/* Login Form */}
        <LoginForm />
      </div>
    </div>
  );
}
export default Login;