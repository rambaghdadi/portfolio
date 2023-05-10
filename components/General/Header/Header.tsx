"use client"

import {AnimatePresence} from "framer-motion"
import Navbar from "../Navbar/Navbar"
import ContactMeModal from "../ContactMe/ContactMeModal"
import {useState} from "react"

export default function Header() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Navbar
        onClick={() => {
          setOpenModal(true)
        }}
      />
      <AnimatePresence mode="wait">
        {openModal && (
          <ContactMeModal
            exit={() => {
              setOpenModal(false)
            }}
          />
        )}
      </AnimatePresence>
    </>
  )
}
