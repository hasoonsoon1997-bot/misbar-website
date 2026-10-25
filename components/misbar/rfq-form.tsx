'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import { BadgeCheck, Building2, CircleCheck, LoaderCircle, User } from 'lucide-react'
import { useLanguage } from './language-provider'
import { SectionHeading } from './section-heading'

type CustomerType = 'workshop' | 'individual'
type Status = 'idle' | 'submitting' | 'success'

const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-navy placeholder:text-slate-400 transition-colors focus:border-gold focus:outline-none focus:ring-4 focus:ring-gold/20'

interface FieldProps {
  id: string
  label: string
  optionalLabel?: string
  hint?: string
  className?: string
  children: ReactNode
}

function Field({ id, label, optionalLabel, hint, className = '', children }: FieldProps) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-sm font-semibold text-navy">
        {label}
        {optionalLabel && <span className="ms-1 font-normal text-slate-500">({optionalLabel})</span>}
      </label>
      {children}
      {hint && (
        <p id={`${id}-hint`} className="text-xs text-slate-500">
          {hint}
        </p>
      )}
    </div>
  )
}

const currentYear = new Date().getFullYear()

export function RfqForm() {
  const { t } = useLanguage()
  const f = t.form
  const [customerType, setCustomerType] = useState<CustomerType>('workshop')
  const [status, setStatus] = useState<Status>('idle')
  const [vin, setVin] = useState('')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    await new Promise<void>((resolve) => setTimeout(resolve, 1200))
    setStatus('success')
  }

  function reset() {
    setStatus('idle')
    setVin('')
    setCustomerType('workshop')
  }

  const customerOptions: { value: CustomerType; label: string; Icon: typeof Building2 }[] = [
    { value: 'workshop', label: f.workshop, Icon: Building2 },
    { value: 'individual', label: f.individual, Icon: User },
  ]

  return (
    <section id="quote" aria-labelledby="quote-title" className="scroll-mt-20 bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading id="quote-title" eyebrow={f.eyebrow} title={f.title} description={f.description} />

        <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {f.perks.map((perk) => (
            <li key={perk} className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <BadgeCheck className="size-4 text-gold" aria-hidden="true" />
              {perk}
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-10">
          {status === 'success' ? (
            <div role="status" className="flex flex-col items-center py-10 text-center">
              <span className="flex size-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                <CircleCheck className="size-9" aria-hidden="true" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-navy">{f.successTitle}</h3>
              <p className="mt-3 max-w-md leading-relaxed text-slate-600">{f.successText}</p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 rounded-xl border border-navy/20 px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {f.newRequest}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
              <fieldset className="md:col-span-2">
                <legend className="mb-3 text-sm font-semibold text-navy">{f.customerType}</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {customerOptions.map(({ value, label, Icon }) => {
                    const checked = customerType === value
                    return (
                      <label
                        key={value}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-colors has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-gold/20 ${
                          checked ? 'border-gold bg-gold/5' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="customerType"
                          value={value}
                          checked={checked}
                          onChange={() => setCustomerType(value)}
                          className="sr-only"
                        />
                        <span
                          className={`flex size-10 items-center justify-center rounded-lg ${
                            checked ? 'bg-gold text-navy' : 'bg-slate-100 text-slate-500'
                          }`}
                        >
                          <Icon className="size-5" aria-hidden="true" />
                        </span>
                        <span className="font-semibold text-navy">{label}</span>
                        <span
                          aria-hidden="true"
                          className={`ms-auto flex size-5 items-center justify-center rounded-full border-2 ${
                            checked ? 'border-gold' : 'border-slate-300'
                          }`}
                        >
                          {checked && <span className="size-2.5 rounded-full bg-gold" />}
                        </span>
                      </label>
                    )
                  })}
                </div>
              </fieldset>

              <Field id="name" label={f.name}>
                <input id="name" name="name" type="text" required autoComplete="name" className={inputClass} />
              </Field>
              <Field id="whatsapp" label={f.whatsapp}>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  dir="ltr"
                  autoComplete="tel"
                  placeholder="+971 50 000 0000"
                  className={`${inputClass} text-start rtl:text-end`}
                />
              </Field>
              <Field id="city" label={f.city}>
                <input id="city" name="city" type="text" required autoComplete="address-level2" className={inputClass} />
              </Field>
              <Field id="country" label={f.country}>
                <input id="country" name="country" type="text" required autoComplete="country-name" className={inputClass} />
              </Field>
              <Field id="email" label={f.email} optionalLabel={f.optional} className="md:col-span-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  dir="ltr"
                  autoComplete="email"
                  placeholder="name@example.com"
                  className={`${inputClass} rtl:text-end`}
                />
              </Field>

              <Field id="vin" label={f.vin} hint={f.vinHint} className="md:col-span-2">
                <input
                  id="vin"
                  name="vin"
                  type="text"
                  required
                  dir="ltr"
                  inputMode="text"
                  autoCapitalize="characters"
                  autoComplete="off"
                  spellCheck={false}
                  minLength={17}
                  maxLength={17}
                  pattern="[A-HJ-NPR-Z0-9]{17}"
                  aria-describedby="vin-hint"
                  value={vin}
                  onChange={(e) => setVin(e.target.value.toUpperCase().replace(/\s/g, ''))}
                  placeholder="WDD2050461A123456"
                  className={`${inputClass} font-mono text-lg tracking-[0.2em] placeholder:tracking-[0.2em]`}
                />
              </Field>

              <Field id="carModel" label={f.carModel}>
                <input
                  id="carModel"
                  name="carModel"
                  type="text"
                  required
                  placeholder={f.carModelPlaceholder}
                  className={inputClass}
                />
              </Field>
              <Field id="carYear" label={f.carYear}>
                <input
                  id="carYear"
                  name="carYear"
                  type="number"
                  required
                  min={1990}
                  max={currentYear + 1}
                  placeholder={String(currentYear)}
                  className={inputClass}
                />
              </Field>
              <Field id="partName" label={f.partName} className="md:col-span-2">
                <input
                  id="partName"
                  name="partName"
                  type="text"
                  required
                  placeholder={f.partNamePlaceholder}
                  className={inputClass}
                />
              </Field>
              <Field id="notes" label={f.notes} optionalLabel={f.optional} className="md:col-span-2">
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder={f.notesPlaceholder}
                  className={`${inputClass} resize-y`}
                />
              </Field>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="flex items-center justify-center gap-2 rounded-xl bg-gold px-6 py-4 text-lg font-bold text-navy shadow-lg shadow-gold/20 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:pointer-events-none disabled:opacity-70 md:col-span-2"
              >
                {status === 'submitting' && <LoaderCircle className="size-5 animate-spin" aria-hidden="true" />}
                {status === 'submitting' ? f.submitting : f.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
