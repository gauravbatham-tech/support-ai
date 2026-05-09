'use client'
import React, { useEffect, useState } from 'react'
import { motion } from "motion/react"
import { useRouter } from 'next/navigation'
import axios from 'axios'

function DashboardClient({ ownerId }: { ownerId: string }) {
  const navigate = useRouter()
  const [businessName, setBusinessName] = useState("")
  const [supportEmail, setSupportEmail] = useState("")
  const [knowledge, setKnowledge] = useState("")
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSettings = async () => {
    setLoading(true)
    try {
      const result = await axios.post("/api/settings", { ownerId, businessName, supportEmail, knowledge })
      console.log(result.data)
      setLoading(false)
      setSaved(true)
      setTimeout(() => {
        setSaved(false)
      }, 3000)

    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (ownerId) {
      const handleGetDetails = async () => {
        try {
          const result = await axios.post("/api/settings/get", { ownerId })
          setBusinessName(result.data.businessName)
          setSupportEmail(result.data.supportEmail)
          setKnowledge(result.data.knowledge)
        } catch (error) {
          console.log(error)
        }
      }

      handleGetDetails()
    }

  }, [ownerId])


  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50 text-slate-900'>
      <motion.div
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}

        className='fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-indigo-200 shadow-lg'>
        <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
          <div className='text-xl font-bold bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent cursor-pointer' onClick={() => navigate.push("/")}>SupportWave</div>
          <button className='px-4 py-2 rounded-lg border-2 border-indigo-300 text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition' onClick={() => navigate.push("/embed")}>
            Embed ChatBot
          </button>

        </div>
      </motion.div>

// Main content area
      <div className='flex justify-center px-4 py-14 mt-20'>
        <motion.div className='w-full max-w-3xl card-premium p-10 border-indigo-100'
        >
          <div className='mb-10'>
            <h1 className='text-3xl font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent'>ChatBot Settings</h1>
            <p className='text-slate-500 mt-2 text-lg'>Manage your AI chatbot and business details</p>
          </div>

          <div className='mb-10'>
            <h1 className='text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2'>
              <span className='w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 text-white flex items-center justify-center text-sm font-bold'>1</span>
              Business Details
            </h1>
            <div className='space-y-4'>
              <input type="text" className='input-modern' placeholder='Business Name' value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
              <input type="text" className='input-modern' placeholder='Support Email' value={supportEmail} onChange={(e) => setSupportEmail(e.target.value)} />
            </div>

          </div>




          <div className='mb-10'>
            <h1 className='text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2'>
              <span className='w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-amber-500 text-white flex items-center justify-center text-sm font-bold'>2</span>
              Knowledge Base
            </h1>
            <p className='text-sm text-slate-600 mb-4 font-medium'>Add FAQs, policies, delivery info, refunds, etc.</p>
            <div className='space-y-4'>
              <textarea className='input-modern h-48 resize-none' placeholder={`Example:
  Refund Policy: 7 days return availaible
  Delivery time: 3-5 working days
  Cash on delivery available
  Support hours`} onChange={(e) => setKnowledge(e.target.value)} value={knowledge} />
            </div>
          </div>


          <div className='flex items-center gap-5'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              onClick={handleSettings}
              className='btn-primary'
            >
              {loading ? "Saving..." : "Save Settings"}

            </motion.button>

            {saved && <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className='text-sm font-medium text-emerald-600 flex items-center gap-2'
            >
              <span>✓</span> Settings saved successfully
            </motion.span>}

          </div>


        </motion.div>
      </div>
    </div>
  )
}

export default DashboardClient
