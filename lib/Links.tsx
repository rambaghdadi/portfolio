import {BrandGithub, BrandLinkedin, Mail} from "tabler-icons-react"

export default function socials(args: {
  size?: number
  fill?: string
  stroke?: string
  color?: string
  strokeWidth?: number
  className?: string
}) {
  return [
    {
      name: "Mail",
      href: "mailto:hello@ram-web.dev",
      icon: <Mail {...args} />,
    },
    {
      name: "BrandGithub",
      href: "https://github.com/rambaghdadi",
      icon: <BrandGithub {...args} />,
    },
    {
      name: "BrandLinkedin",
      href: "https://uk.linkedin.com/in/rambaghdadi",
      icon: <BrandLinkedin {...args} />,
    },
  ]
}
