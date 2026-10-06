import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { profile } from '../data/portfolio'
import { Reveal } from './Reveal'

type Field = 'name' | 'email' | 'message'
type Errors = Partial<Record<Field, string>>

const emailPattern = /^\S+@\S+\.\S+$/

function validate(form: Record<Field, string>): Errors {
  const errors: Errors = {}
  if (!form.name.trim()) errors.name = 'Please add your name.'
  if (!emailPattern.test(form.email.trim())) errors.email = 'Please add a valid email address.'
  if (form.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.'
  return errors
}

export function ContactSection() {
  const [form, setForm] = useState<Record<Field, string>>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const update = (field: Field, value: string) => {
    setForm(current => ({ ...current, [field]: value }))
    if (errors[field]) setErrors(current => ({ ...current, [field]: undefined }))
    setSent(false)
  }

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const next = validate(form)
    setErrors(next)
    const firstInvalid = (Object.keys(next) as Field[])[0]
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      setSent(false)
      return
    }
    // No backend exists, so hand the message to the visitor's email client.
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`)
    const body = encodeURIComponent(`${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  const hasErrors = Object.values(errors).some(Boolean)

  const fieldProps = (field: Field) => ({
    id: `contact-${field}`,
    name: field,
    'data-testid': `contact-${field}`,
    value: form[field],
    'aria-invalid': errors[field] ? true : undefined,
    'aria-describedby': errors[field] ? `contact-${field}-error` : undefined,
  })

  return (
    <section id="contact" className="contact section" data-testid="contact-section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="container contact-grid">
        <Reveal className="contact-intro">
          <p className="kicker"><span>07</span>Get in touch</p>
          <h2 id="contact-title">Let’s build<br />something<br /><em>meaningful.</em></h2>
          <p className="contact-copy">For product work, frontend architecture, or a thoughtful conversation about building better digital experiences.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <ArrowUpRight size={15} aria-hidden="true" /><span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="contact-form" onSubmit={submit} data-testid="contact-form" noValidate aria-describedby={hasErrors ? 'contact-form-error' : undefined}>
            <div className="field">
              <label htmlFor="contact-name">Name</label>
              <input {...fieldProps('name')} autoComplete="name" placeholder="Your name" onChange={e => update('name', e.target.value)} />
              {errors.name && <p className="field-error" id="contact-name-error">{errors.name}</p>}
            </div>
            <div className="field">
              <label htmlFor="contact-email">Email</label>
              <input {...fieldProps('email')} type="email" autoComplete="email" placeholder="you@company.com" onChange={e => update('email', e.target.value)} />
              {errors.email && <p className="field-error" id="contact-email-error">{errors.email}</p>}
            </div>
            <div className="field">
              <label htmlFor="contact-message">Message</label>
              <textarea {...fieldProps('message')} rows={5} placeholder="Tell me about the opportunity" onChange={e => update('message', e.target.value)} />
              {errors.message && <p className="field-error" id="contact-message-error">{errors.message}</p>}
            </div>
            {hasErrors && (
              <p className="form-error" id="contact-form-error" role="alert">
                Please add your name, a valid email, and a message of at least 10 characters.
              </p>
            )}
            {sent && (
              <p className="form-success" role="status">
                <Check size={16} aria-hidden="true" /> Your email app should open with the message ready to send.
              </p>
            )}
            <button className="button button-dark" data-testid="contact-submit" type="submit">
              Send message <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
