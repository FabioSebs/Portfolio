"use client"

import { useState } from "react"
import { Mail, MapPin, CreditCard, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HiringInfo() {
  const [copied, setCopied] = useState(false)
  const email = "fabrzytech@gmail.com" // Replace with your actual email

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className="w-full max-w-md overflow-hidden border-0 shadow-lg">
      <div className="h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
      <CardHeader className="space-y-1 pb-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Interested in hiring me?</h2>
          <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
            Available
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="mt-1 h-5 w-5 text-purple-500" />
            <div>
              <p className="font-medium">Residency Status</p>
              <p className="text-sm text-muted-foreground">
                I have Peruvian residency, soon to have Indonesian residency
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CreditCard className="mt-1 h-5 w-5 text-pink-500" />
            <div>
              <p className="font-medium">Employment Options</p>
              <p className="text-sm text-muted-foreground">
                I can be employed as an Independent Contractor. For American companies, I have a valid American bank
                account!
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-slate-50 p-3">
          <p className="text-sm font-medium text-slate-900">For more inquiries, please contact me via email</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={copyEmail}
          className="group w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
        >
          {copied ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              Email Copied!
            </>
          ) : (
            <>
              <Mail className="mr-2 h-4 w-4" />
              {email}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
