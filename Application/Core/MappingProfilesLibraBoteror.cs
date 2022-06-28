

using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfilesLibraBoteror
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<LibraBoteror, LibraBoteror>();
            }
        }
    }
}
