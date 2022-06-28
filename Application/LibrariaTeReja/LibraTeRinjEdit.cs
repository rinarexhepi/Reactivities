﻿using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaTeReja
{
    public class LibraTeRinjEdit
    {
        public class Command : IRequest
        {
            public LibraTeRinj LibraTeRinj { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var libriIRi = await _context.LibraTeRinj.FindAsync(request.LibraTeRinj.ID);

                _mapper.Map(request.LibraTeRinj, libriIRi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
