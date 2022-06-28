
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Autoret

{
    public class AutoriEdit
    {
        public class Command : IRequest
        {
            public Autori Autori { get; set; }
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
                var autori = await _context.Autori.FindAsync(request.Autori.ID);

                _mapper.Map(request.Autori, autori);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}