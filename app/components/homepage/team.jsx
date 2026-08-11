// @flow strict
import { teamData } from "@/utils/data/team";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function TeamSection() {
  return (
    <div id="team" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex  items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Our Team
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto text-base lg:text-lg">
          Tim kami terdiri dari profesional berpengalaman di bidang AI, web development, automation, dan cloud infrastructure.
          Kami peduli dengan keberhasilan bisnis klien Indonesia.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto px-4">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="group relative bg-gradient-to-br from-[#0d1224] to-[#1a1443] border border-[#25213b] rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-500"
            >
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={500}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex gap-2 justify-center">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label={`${member.name} GitHub`}
                    >
                      <FaGithub size={18} />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <FaTwitter size={18} />
                    </a>
                  )}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-[#16f2b3] text-sm font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.slice(0, 5).map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-violet-500/20 text-violet-300 text-xs rounded-full border border-violet-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 5 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-full border border-gray-600">
                      +{member.skills.length - 5}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;