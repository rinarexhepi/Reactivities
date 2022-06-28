
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfileTeRinj
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<LibraTeRinj, LibraTeRinj>();
            }
        }
    }
}
