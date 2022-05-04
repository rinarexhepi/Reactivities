

using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfilesLPF
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<LibraPerFemije, LibraPerFemije>();
            }
        }
    }
}
