import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebook, faTwitter, faGithub, faLinkedin} from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return(
        <div className="flex flex-row p-2 justify-between bg-teal-600 text-white">
            <p>nxt_hub</p>
            <ul className="flex flex-row">
                <li>
                    <FontAwesomeIcon
                        icon={faFacebook}
                        style={{ fontSize: 15, color: "teal" }}
                        className="absolute text-gray-100 top-[50%] left-4 -translate-y-2/4"
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={faTwitter}
                        style={{ fontSize: 15, color: "teal" }}
                        className="absolute text-gray-100 top-[50%] left-4 -translate-y-2/4"
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={faGithub}
                        style={{ fontSize: 15, color: "teal" }}
                        className="absolute text-gray-100 top-[50%] left-4 -translate-y-2/4"
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ fontSize: 15, color: "teal" }}
                        className="absolute text-gray-100 top-[50%] left-4 -translate-y-2/4"
                    />
                </li>
            </ul>
        </div>
    )
}
export default Footer