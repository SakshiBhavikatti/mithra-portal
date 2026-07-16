import { motion } from "framer-motion";

function LoginForm({ onLogin }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      className="
        relative
        w-full
        max-w-md
        overflow-hidden
        rounded-[2rem]
        border border-white/10
        bg-white/[0.06]
        p-8
        backdrop-blur-2xl
        shadow-[0_10px_60px_rgba(0,0,0,0.45)]
        transition-all duration-500
        hover:border-[#EB0A1E]/40
        hover:shadow-[0_0_50px_rgba(235,10,30,0.22)]
      "
    >
      {/* Red Gradient Overlay */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-br
          from-[#EB0A1E]/10
          via-transparent
          to-transparent
          pointer-events-none
        "
      />

      <div className="relative z-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Welcome Back
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-white/65">
          Sign in securely using SAP Cloud Identity Services
        </p>

        <button
          onClick={onLogin}
          className="
            mt-8
            w-full
            rounded-2xl
            bg-[#EB0A1E]
            px-5
            py-4
            text-sm
            font-medium
            tracking-wide
            text-white
            shadow-[0_12px_30px_rgba(235,10,30,0.35)]
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-[#ff1f34]
            hover:shadow-[0_20px_45px_rgba(235,10,30,0.45)]
          "
        >
          Continue with SAP CIS
        </button>

        <div className="mt-6 flex justify-center">
          <button
            className="
              text-sm
              text-white/55
              transition-colors duration-300
              hover:text-[#FF6B75]
            "
          >
            Forgot Password?
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginForm;