

using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.AutoretBoteror
{
    public class AutoriBoterorEdit
    {
        public class Command : IRequest
        {
            public AutoriBoteror AutoriBoteror { get; set; }
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
                var autoriBoteror = await _context.AutoriBoteror.FindAsync(request.AutoriBoteror.ID);

                _mapper.Map(request.AutoriBoteror, autoriBoteror);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
