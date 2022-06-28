using System;
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfilesPublikime
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<Publikime, Publikime>();
            }
        }

    }
}
