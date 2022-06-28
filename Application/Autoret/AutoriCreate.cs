﻿using Domain;
using MediatR;
using Persistence;

namespace Application.Autoret
{
    public class AutoriCreate
    {
        public class Command : IRequest
        {
            public Autori Autori { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;

            public Handler(DataContext context)
            {
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _context.Autori.Add(request.Autori);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
