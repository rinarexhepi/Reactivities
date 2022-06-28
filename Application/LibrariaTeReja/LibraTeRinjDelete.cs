﻿using MediatR;
using Persistence;

namespace Application.LibrariaTeReja
{
    public class LibraTeRinjDelete
    {
        public class Command : IRequest
        {
            public int ID { get; set; }
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
                var libriIRi = await _context.LibraTeRinj.FindAsync(request.ID);

                _context.Remove(libriIRi);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
