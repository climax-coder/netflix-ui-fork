import SearchBox from "./SearchBox";
import primaryProfile from "../assets/profile-primary.png";
import secondaryProfile from "../assets/profile-secondary.png";
import kidsProfile from "../assets/profile-kids.png";
import { Icon } from "@iconify/react";
import HoverDropdown from "./HoverDropdown";

export default function Header() {
  return (
    <header className="relative w-full flex items-center justify-between py-2 px-12 z-10 h-14 text-gray-50 bg-gradient-to-b from-gray-950 to-transparent">
      <nav className="flex items-center">
        <a href="/" className="mr-6">
          <img className="w-8" src="/logo.svg" alt="Netflix Logo" />
        </a>
        <ul className="flex items-center [&>*]:mr-4 last:[&>*]:mr-0">
          {["Home", "TV Series", "Movies", "My List"].map((navItem) => (
            <li key={navItem}>
              <a href="#">{navItem}</a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="h-full flex items-center [&>*]:mr-3 last:[&>*]:mr-0 text-gray-50 [&_*]:transition-all [&_*]:duration-200">
        <SearchBox />
        <button>Kids</button>
        <div className="relative group">
          <button className="w-8 h-8 p-2 flex items-center justify-center">
            <Icon icon="heroicons:bell" className="text-xl shrink-0" />
          </button>
          <HoverDropdown
            indicatorPostition={"2"}
            classes={"items-center justify-center h-24"}
          >
            <h2>No new notifications</h2>
          </HoverDropdown>
        </div>
        <div className="h-full flex items-center relative group">
          <img
            className="h-2/3 rounded mr-1"
            src={primaryProfile}
            alt="Current Profile Picture"
          />
          <Icon
            icon="heroicons:chevron-down"
            className="text-sm group-hover:rotate-180"
          />
          <HoverDropdown
            indicatorPostition={"5"}
            classes={
              "text-sm hover:[&_li]:bg-gray-600/50 hover:[&>button]:bg-gray-600/50"
            }
          >
            <ul className="my-1 [&_button]:flex [&_button]:items-center [&>li]:py-2 [&>li]:px-3">
              {[
                {
                  id: "free-loader",
                  name: "Free Loader",
                  locked: true,
                  picture: secondaryProfile
                },
                { id: "kids", name: "Kids", locked: true, picture: kidsProfile }
              ].map((profile) => (
                <li key={profile.id}>
                  <button className="w-full">
                    <img
                      className="w-7 h-7 rounded mr-2"
                      src={profile.picture}
                      alt="Current Profile Picture"
                    />
                    <span>{profile.name}</span>
                    {profile.locked && (
                      <Icon icon="heroicons:lock-closed" className="ml-auto" />
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <hr className="border-0 border-t border-gray-500/50" />
            <ul className="my-1 [&_a]:flex [&_a]:items-center [&>li]:py-2 [&>li]:px-3">
              <li>
                <a href="#">
                  <Icon icon="heroicons:pencil-solid" className="mr-2" />
                  Manage Profiles
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon icon="heroicons:user-solid" className="mr-2" />
                  Account
                </a>
              </li>
              <li>
                <a href="#">
                  <Icon
                    icon="heroicons:question-mark-circle-solid"
                    className="mr-2"
                  />
                  Help Center
                </a>
              </li>
            </ul>
            <hr className="border-0 border-t border-gray-500/50" />
            <button className="my-1 text-center w-full py-2">Sign Out</button>
          </HoverDropdown>
        </div>
      </div>
    </header>
  );
}