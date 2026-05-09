'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { motion } from "motion/react"

function EmbedClient({ ownerId }: { ownerId: string }) {
    const navigate = useRouter()
    const [copied, setCopied] = useState(false)

    const embedCode = `<script 
    src="${process.env.NEXT_PUBLIC_APP_URL}/chatBot.js" 
    data-owner-id="${ownerId}">
</script>`

    const copyCode = () => {
        navigator.clipboard.writeText(embedCode)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }


    return (
        <div className='min-h-screen bg-linear-to-br from-slate-50 to-indigo-50 text-slate-900'>
            <div className='sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-indigo-200 shadow-lg'>
                <div className='max-w-7xl mx-auto px-6 h-16 flex items-center justify-between'>
                    <div className='text-xl font-bold bg-linear-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent cursor-pointer' onClick={() => navigate.push("/")}>SupportWave</div>
                    <button className='px-4 py-2 rounded-lg border-2 border-indigo-300 text-indigo-600 text-sm font-medium hover:bg-indigo-50 transition cursor-pointer' onClick={() => navigate.push("/dashboard")}>
                        Back to Dashboard
                    </button>
                </div>
            </div>
            <div className='flex justify-center px-4 py-14'>
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className='w-full max-w-4xl card-premium p-10 border-indigo-100'
                >
                    <h1 className='text-3xl font-bold bg-linear-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent mb-2'>Embed ChatBot</h1>
                    <p className='text-slate-600 font-medium'>Copy and paste this code before <code className='bg-slate-100 px-2 py-1 rounded text-indigo-600 font-mono'>&lt;/body&gt;</code></p>
                    <div className='relative bg-slate-900 text-slate-100 rounded-xl p-6 text-sm font-mono mb-10 mt-6 overflow-x-auto border border-slate-700'>
                        <pre className='overflow-x-auto'>{embedCode}</pre>
                        <button onClick={copyCode} className='absolute top-4 right-4 bg-linear-to-r from-indigo-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-lg hover:shadow-lg transition transform hover:scale-105'>
                            {copied ? "✓ Copied!" : "Copy"}
                        </button>
                    </div>

                    <ol className='space-y-3 text-slate-700 list-decimal list-inside mb-10'>
                        <li className='font-medium'>Copy the embed script</li>
                        <li className='font-medium'>Paste it before the closing body tag</li>
                        <li className='font-medium'>Reload the Website</li>
                    </ol>


                    <div className='mt-14'>
                        <h1 className='text-2xl font-bold text-slate-900 mb-3'>Live Preview</h1>
                        <p className='text-slate-600 font-medium mb-6'>This is how the chatbot will appear on your website</p>


                        <div className='rounded-xl border border-indigo-200 bg-white shadow-xl overflow-hidden'>
                            <div className='flex items-center gap-2 px-4 h-9 bg-linear-to-r from-slate-100 to-slate-50 border-b border-slate-200'>
                                <span className='w-2.5 h-2.5 rounded-full bg-rose-400' />
                                <span className='w-2.5 h-2.5 rounded-full bg-amber-400' />
                                <span className='w-2.5 h-2.5 rounded-full bg-emerald-400' />
                                <span className='ml-4 text-xs text-slate-600 font-semibold'>Your-website.com</span>
                            </div>



                            <div className='relative h-64 sm:h-72 p-6 text-slate-400 text-sm bg-linear-to-br from-white to-slate-50'>
                                Your website content goes here


                                <div className='absolute bottom-24 right-6 w-64 card-premium overflow-hidden border-indigo-100 shadow-2xl'>
                                    <div className='bg-linear-to-r from-indigo-600 to-pink-600 text-white text-xs px-4 py-3 flex items-center justify-between font-semibold'>
                                        <span className='flex items-center gap-2'>
                                            <span className='text-lg'>💬</span>
                                            Customer Support
                                        </span>
                                        <span className='cursor-pointer hover:scale-110'>✕</span>
                                    </div>

                                    <div className='p-4 space-y-3 bg-slate-50'>
                                        <div className='bg-indigo-100 text-indigo-800 text-xs px-3 py-2 rounded-lg'>Hi! How can I help you?</div>
                                        <div className='bg-linear-to-r from-indigo-600 to-pink-600 text-white text-xs px-3 py-2 rounded-lg ml-auto w-fit'>What is the return policy?</div>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{ repeat: Infinity, duration: 3 }}
                                    className='absolute bottom-6 right-6 w-16 h-16 rounded-full bg-linear-to-br from-indigo-500 to-pink-500 text-white text-2xl flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 transition'
                                >💬
                                </motion.div>
                            </div>
                        </div>

                    </div>

                </motion.div>
            </div>
        </div>
    )
}

export default EmbedClient