package ma.enova.easystock.dao.facade.core;


import ma.enova.easystock.zynerator.repository.AbstractRepository;
import ma.enova.easystock.bean.core.Produit;
import org.springframework.stereotype.Repository;
import ma.enova.easystock.bean.core.Produit;
import java.util.List;


@Repository
public interface ProduitDao extends AbstractRepository<Produit,Long>  {
    Produit findByReference(String reference);
    int deleteByReference(String reference);


}
