import { skills } from '../data/content'
import { useReveal } from '../lib/hooks'

export default function Skills() {
  const ref = useReveal()
  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <div className="section__head">
          <h2 className="section__title" data-reveal>
            Skills
          </h2>
        </div>
        <div className="skills__rows">
          {skills.map((group) => (
            <div className="skills__row" key={group.group} data-reveal-group>
              <h3 data-reveal>{group.group}</h3>
              <ul className="chips chips--large">
                {group.items.map((item) => (
                  <li className="chip" key={item} data-reveal>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
