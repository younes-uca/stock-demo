package ma.enova.easystock.dao.facade.core;


import ma.enova.easystock.zynerator.repository.AbstractRepository;
import ma.enova.easystock.bean.core.Client;
import org.springframework.stereotype.Repository;
import ma.enova.easystock.bean.core.Client;
import java.util.List;


@Repository
public interface ClientDao extends AbstractRepository<Client,Long>  {
    Client findByCin(String cin);
    int deleteByCin(String cin);


}
