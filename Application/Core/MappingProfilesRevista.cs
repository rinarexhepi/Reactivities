

using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfilesRevista
    {
        public  class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<Revista, Revista>();
            }
        }
        
    }
}
