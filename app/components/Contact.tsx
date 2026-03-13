"use client"

import Image from "next/image";
import React from "react";

export default function Contact(){
    return (
        <section className=" h-full w-screen overflow-hidden rounded-t-4xl" id="Contact" style={{backgroundColor:'rgba(255, 170, 30,1)',boxShadow:'0px 0px 20px 1px orange'}}>
            <div className="about flex flex-col" >
                <div className="text-black font-bold relative  md:left-[10vw] text-shadow-md text-shadow-black text-[85px] md:text-[150px]">Contact</div>
                <div className="flex flex-col ">
                    <div className=" relative left-0 md:left-[12vw] md:top-30">
                        <p className=" text-black md:w-150 "> Curious to learn more about my work or collaborate on a project?</p>
                        <p className="  text-black font-bold text-[15px] "> —— I’d love to hear from you!</p>
                        <div className="flex flex-row pt-3  gap-0 md:gap-3">
                            <div className="h-2 w-12 z-20">
                                <a href="https://github.com/shivampv" target="_blank" rel="noopener noreferrer">
                                    <Image className={"connectionLinkAbout"}
                                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADtUlEQVR4nO2ZWaiNURTHj3mepzI+8YIX1/AikiilDCFDIUUpRSKkkCkvyviizCRTSYaUB0KGGxnzYB6veZ6uoZ9W7U/L9t397X3Od85Nnd/TOWevtff6n/3tvfZeXyZTpEiRnAGqAj2BGcBu4ArwCPgCfAfeANeBfcA8oJf4ZCoboD2wELhHOCJwOdCmMgJvAqwEysmdb8B6oGmhgpdH5VVMIC+ALcAUoBvQFqgD1ACaAyXAeGAjUBbj/xIYVQgBG6yBTwLDgZoBfVQHBgMnYoSsk/Z8CugHvAWuAcNS6G8QcMsScVBmL/O/ANQHtsWIyN9M5ANggSVibeZ/g39FjMjnYJOBi8Bq2XUC/NoBa4BLwNiY9u3W7tYkm+AGyhQCnR02Z9RA74EBnv2KbcTxCtbE7awfJbOHS4IRzjns7Az8GVgCHAEemu+fzefDpk2+a+46dqcIiaV1iIClyvmQw+4muXPX0b/kmIhlIQezp8pxiMN2awoCjjv6l2QX8cDrAAj0UE7PgGoO26kpCFiRkLElhoiePgLmK4dNDrvGVufZ8gRo5Bhns7Kd4yNgj3KY6Ck0V+Y6xpmg7Pb6CLihHEocdrL/p0WpY5zuyu6qjwBJHBEtHHYfUxTw0TFOC2X30kdAtP8LtRx2H1IU8M4xTi1l981HgL5l1XXYlaYo4LxjnNrK7quPgNfKoYPDTi7naTHHMU4rZffMR4BUDyK6O+waVHA1DOWp9JVwhY245iNgv3KYkmDbN8eLfTnQJ2GMScp+l48A/Wjs9LAfYK6YoUitqL9H/1t98oV2kKJTRJnPtU5qOyIW+OkR+A9gh8/pEqhmbevdfA9zUnSKGJno9PdFZbapzNlcBmaJTUB/w5S/xFTF11EqZhGnrLbpwFGgYwW+40xJ0eZTaN0HOKb8F4c4trES2p8jtfwLpoAlh7BOMSfZnwmLtiQgjuvKL6wEacp9evoaqraWklTM713U7wdIZl9ADL1MuWVoUPDGuZkp90Xs0s+gWYjCL3NlvGMWaBJlmUIBjKro8gF0NbMQTMEECKZWqVkazQTQG7jg+c9XmoDqpsynkWxdP8Y2KwFAI2CRXNyBevkQUSdGxEN7W8xGADDaKiLMTF2AmgkpdNmcBsZY5/Ykapt3BWdj2sJ3nEAhI4DnMQPrHSsJfWSPeCzvGfIavPWKaa2V7LLlK7BK55mCIQcys/BkPYQiPnLybV7wwB2vWedK6UOqB+YxKTe10PtybTSvYKdJ9vY+mBUpUiTj4jcBv6pleZsSMQAAAABJRU5ErkJggg=="
                                           alt="github" width={48} height={48}/>
                                </a>
                            </div>
                            <div className="h-2 w-12 z-20">
                                <a href="https://www.linkedin.com/in/shivam-pr-verma/" target="_blank"
                                   rel="noopener noreferrer">
                                    <Image className={"connectionLinkAbout"}
                                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABzUlEQVR4nO2ZTUoDMRhAByq6cKm4cGE9hFulPwvv4BHUc7gX/DuBd9C6FKqCLjyAVqUo0oXWghQKTwKZEutM6iSTSQt5m7SkSb6XZDIzX6MoEAgEJhpgETgCXoAB7hkAz8AJULYNvgq84Y8uULOZeZ/Bx7wDSyYCx8Mu4EmuRsloNrKNWwI2gJYy/qFJR2IfxlSdRKsBqCvjt0w6UC9Y5zOfshIxgygrSmMiT2ATg66xON6AC6AHNICVvIIuSkAEr3KeeQDLGGwFvkYEutGUCTSmfQXKImi5EmdTdw0UBZYCHdm24yS6AgQ2gVNRJtTdjFwDV7o6YA7YBpry6O3Jz7vArBOBMXJ/0NUB96RzByxPusA4bpNWwkoAWAP2RVmAgGAnb4G2bNvOQeBBvJgA8/Ip8zHhN828BVIbGwjUNI/KqXdzoC/r+r4Ffu1v8V3XRwywB3yLMvIpMK7/mMxBBgGFIEDiOFvApSinVaBr/L4xIQJDgoAKcJ12F9XV/bcP5wJFgaWA78TWjG1iS00trjuJUgNQsU0tjiZ36wUmdyt5JHdXlXPYJx/GWQ85668eg/8UMRgFr0gsAAdyGxX1F1NLbBtX+aZAIBCIcuMHj8UhI9t44KcAAAAASUVORK5CYII="
                                           alt="linkedin" width={48} height={48}/>
                                </a>
                            </div>
                            <div className="h-2 w-12 z-20">
                                <a href="https://www.instagram.com/_shivam_0p/" target="_blank" rel="noopener noreferrer">
                                    <Image className={"connectionLinkAbout"}
                                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC4klEQVR4nO2Zy05UQRCGDyBsxHFnYHwHUeNOXGCYRNxoJiCP4QMALo0KLEzYuPYWFQjPMbNXvC5UTNSVQjAkk3ymYrWptDDTp0+fEeP8SedMoC5/zVTV6a7Osh566OH/AdAHjANLQBPYAlrEo6U2mmpTbPeVRf6iOiobTfGVkvgAcIvu4x5wJAX5Dc/wDrACTAJVkSlov6q2VtS2xUYR++Jg2TO4CoxEG+zsb0R9WCwXyXmLO6UV2J+NQnxZTGQRRmzBPusGec+//SWaufwDF4zydslpcxn4oGvK/P0E8N3wGM9jVHqyw0pZ5AVK3OF9ZqCF7bCUhQJoGMXJHHpDwCzwGNjUrrKjnx8B10QmRwA1879GngA+GcXRQJ0Z4B2d8RaoG70pIa7rkmdTWqzDVp4A7PZgIKCX++02BJKmIbYdWnkC+I0AWZ/8Z2AOGAOO6joDzANf/CCyhFxyKwHTHqGnwLE28pV9XlT1MgLYU529DgVrc/5JSK/ep8e/8Qs7RQA3gR/ybCMz66XNgd/8Ab+ETaeZpAEEkpC26DAXob9g9B+0kZPzQr4uFEjglSFwKkL/tNHfbCN3Drgrz8KkPcOyxXAYjtAfNvrbqcldB17Ks8QApA4cvhUm7RnfVcO7bWQkQIexCB/ybignhUIqH3hoxOYjArhh9O8nLeLAAGRj5iAtsZLD/nHgq9GfLsIlNoAh3Zg5rAa+yPqBdaP3GhjsegAqV7eyGkSlwzdvyQuupuASrQQsWnlNpwUt0mFdZzXnbdoIbqfkUmQ77QcRApk19QfYjtpOu8oXVAN16rox6wTJ+SuBNk8avY/dOlLOaIt9oS87Wc9lv6Pb78Ec9mqxR8quHerbocihXqbEDjuh5+KUAEa9UeP5IoOtoB6fCvzyvxY92DoEo8XFQqPFDsPd0ZLTZs3zuVTWeL2WcLxeK2W8/s9fcPzFK6aJrAuXfI2El3wNLdzyLvl66KGH7FDiJ4pf6oc6apn7AAAAAElFTkSuQmCC"
                                           alt="instagram" width={48} height={48}/>
                                </a>
                            </div>
                            <div className="h-2 w-12 z-20">
                                <a href="https://discordapp.com/users/552857519647752192" target="_blank"
                                   rel="noopener noreferrer">
                                    <Image className={"connectionLinkAbout"}
                                           src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERUlEQVR4nO2YW4hWVRTHPy94GUUdtEgHxmt4oTRnvJTipRIflB7K8EVNCAoS1AfBhPBCTV7KGwiFKJg9SSpdlKQos5KmMhWli0WDOuAFwynUcdSZ8RcL15E1233O7PN9Mypy/k/ft89a/7X23muvvfbK5TJkyJAhw90E0AeYB+wETgP/AvuB51NwzAC+Ud3TyvUa0Lu1nG4DTAe+BhqJR0UA18oE/UbgK2Ca2Gwp558ADhOOsQlcT6Xg+QUYUajz84EbnlWS7V8APC7bDuwx37cn8G03cp+q7mPAQuBbz+6K7UX5Ot8BaDBktcAGoK8j1wNYYuSuAVVAjf6+pr+r9HeE10XX4eoPbALqnInMzncScjjRFR9oxgcAK4BKZ5Jp0QD8ACwXTsM/WLkjXAR65jOB9kCp+V8G7G3mIOeLRg3FMrXVC/jHfF+a1y4Y51cBN2NWUQ7cOuAlYCLQDyjWBWivv2Vsksqs18TQ4OETGyvVppyzCOeAjiGOPgn8CXwGdNKxtk5cNuhqST7vXsCidAde9OxqndosAi6Y8bkhpAeNwkQzvhG4AuwAhubrdILdYcotNjaY8TeMP981R1JqwqRe4jB3jwE8pL5E56QkSXixme3nufsEwJfGrwVJgodSxdtdAvCK8etgnFAvc5Dq3UvmXoJbvtkwetgnJNkgwo+5+wzA98a/Oytf4D0jsCpFofezlghHpVgL0Hka+FV1fhKOQFu2il3rE/jDCEwNIByo9ZHF9aQKEhjvubyuAoMC7E2PjRCgi4l/SaPdAgi34ccnCToHYnQ+DLBXbHyUKrXIfhxlyE41R6Y6v8U4czZGvq1nxyL8FWjz+G0Nu9OSMs2HvYFkx/CjOmECcssWMoG5GoJHgM72wzuGbE0g2fsxzuxI0JGyPK8QigB0lcVwBz8yZK/mwh/3UqdbXAYeTdAZZ/J5hFr71miJq3pGCr3+WrVWA1+EFHnAZI1lqTgrC373Kqnk4wjPeHJ9leb7oJxdoC8j9ZV2AhgeqiT1f4QmK6IPlQhygD6QlW8Fxwfoo9/eE+965GYCHzdZaEl9RukFR0FS7CUnbm9oM+q5JtkgvdOdlWOnp/shNsc48hPMBE/YD7uN4n/2IWNWZx9+1GkzqgKYBZTru6LYuYRKdTFmqaw0ydzuQ4R99pGvHOXOG3m3/ViirQ9bElS4qws8azoVrYH9YsPT3lnmtGQu3vGw0TpF0qDF31qLd3Fkh6Ts1jWHw8LpCa+XPTe+hNa4uJgcDZz0GJAm7GY5H5r/5zj5fAvwNrBLU2S1s6M1OnZc411kt5rv9cpZojY2O/oRJBuWxxypJp22TZ4LJw7SEmyXSOq3004e6YE26rWpEN4BkRYi8JaToVxIrn4krfPGRm+pgxL4zwBv2uZaPkakMTUVWC11OHBe3w6rW+LZya0dF67ftXlVqU20KWK7UP4MGTJkyPBg43/zVtyIwFODswAAAABJRU5ErkJggg=="
                                           alt="discord" width={48} height={48}/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col  items-end  relative right-10   md:right-[10vw] h-90">
                        <input className=" text-black border-b-1 w-[60vw] md:w-[40vw] placeholder-black p-3 h-15 outline-0 " type="text" placeholder="Name"/>
                        <input className=" text-black border-b-1 w-[60vw] md:w-[40vw] placeholder-black p-3 h-15 outline-0" type={"email"} placeholder={"Email"} />
                        <textarea className=" text-black placeholder-black border-b-1 w-[60vw] md:w-[40vw] p-3 pt-5 outline-0"  placeholder={"How can i help you ?"} rows={3}/>
                        <button className=" h-10 w-50 bg-black text-white text-2xl rounded-md relative top-5 " type={"submit"} style={{fontFamily:'monospace', boxShadow:'0px 5px 2px 5px black'}} >SEND</button>
                    </div>
                </div>
            </div>
        </section>
    );
};